import awInput from '@/components/ui/awInput'
import awTextarea from '@/components/ui/awTextarea'
import awButton from '@/components/ui/awButton'

export default {
  data () {
    return {
      senderName: "",
      senderMail: "",
      text: ""
    }
  },
  components: {
    awInput,
    awTextarea,
    awButton
  }
}