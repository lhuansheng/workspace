import {onMounted, ref,computed} from 'vue'

export default function useClock(){
  const date = ref(new Date())
  onMounted(()=>{
    setInterval(() => {
      date.value = new Date()
    }, 1000);
  })
 
  let time = computed(()=> {
    return date.value.toLocaleTimeString()
  })
  return time
}