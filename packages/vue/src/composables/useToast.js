import { ref } from 'vue'

const messages = ref([])
const current = ref(null)

const list = () => {
  current.value = messages.value[0]

  setTimeout(() => {
    messages.value.shift()
    current.value = null
  }, 3000)
}

setInterval(() => {
  if (messages.value.length >= 1 && current.value === null) {
    list()
  }
}, 1000)

/**
 * Provides a reactive toast notification system.
 *
 * @returns {object} An object containing the messages, current message, and add function.
 *
 * @example
 * import { useToast } from '@/composables/useToast.js';
 *
 * const { current, add } = useToast();
 *
 * toast.add({
 *   type: 'success',
 *   message: 'This is a success message.',
 * });
 *
 * <BToast v-if="current" :type="current.type" :visible="true">
 *     {{ current.body }}
 * </BToast>
 */
export function useToast() {
  const add = (msg) => {
    messages.value.push(msg)
  }

  return { messages, current, add }
}
