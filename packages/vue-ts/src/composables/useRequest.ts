import { ref } from 'vue'
import type { Ref } from 'vue'
import axios from 'axios'
import type { AxiosResponse } from 'axios'
import type { Method } from 'axios'
import type { AxiosRequestConfig } from 'axios'

interface UseRequestConfig extends AxiosRequestConfig {
  baseURL?: string;
  timeout?: number;
  headers?: {
    [key: string]: string;
  };
}

interface UseRequestReturn {
  config: Ref<UseRequestConfig>;
  localConfig: UseRequestConfig;
  setAuthHeader: (token: string) => void;
  request: (method: Method, url: string, data?: any, params?: any) => Promise<AxiosResponse>;
}

/**
 * Provides a reactive way to manage HTTP requests using Axios.
 *
 * @param {object} localConfig An object containing Axios configuration options.
 *
 * @returns {object} An object containing the config, localConfig, setAuthHeader, and request functions.
 *
 * @example
 * import { useRequest } from '@/composables/useRequest.ts';
 *
 * const { config, setAuthHeader, request } = useRequest({
 *   baseURL: 'https://localhost',
 * });
 *
 * setAuthHeader('your_bearer_token');
 *
 * const response = await request('get', '/users');
 */
export function useRequest(localConfig: UseRequestConfig = {}): UseRequestReturn {
  const config = ref<UseRequestConfig>({
    baseURL: '',
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  let mergedConfig = { ...config.value, ...localConfig }

  /**
   * Sets the Authorization header with a bearer token.
   *
   * @param {string} token The bearer token.
   */
  const setAuthHeader = (token: string) => {
    if (!mergedConfig.headers) {
      mergedConfig.headers = {};
    }
    mergedConfig.headers['Authorization'] = 'Bearer ' + token
  }

  /**
   * Makes an HTTP request using Axios.
   *
   * @param {string} method The HTTP method (e.g., 'get', 'post', 'put', 'delete').
   * @param {string} url The request URL.
   * @param {object} data The request data (for POST, PUT requests).
   * @param {object} params The request query parameters.
   * @returns {Promise} A promise that resolves with the Axios response.
   */
  const request = (method: Method, url: string, data?: any, params?: any): Promise<AxiosResponse> => {
    return axios.create(mergedConfig).request({
      method,
      url,
      data,
      params,
    })
  }

  return { config, localConfig, setAuthHeader, request }
}
