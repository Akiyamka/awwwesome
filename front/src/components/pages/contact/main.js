import awInput from '@/components/ui/awInput'
import awTextarea from '@/components/ui/awTextarea'
import awButton from '@/components/ui/awButton'
import axios from 'axios'

export default {
  data () {
    return {
      senderName: "",
      senderMail: "",
      text: "",
      string: 'Ơǐǐǀǌè¼¼ƘƼǈƴǌǀǈƔƔ¸ƤƼ¼ƄƬƤǤƄƴƬƄĀƜƴƄƤư¸ƌƼƴ'
    }
  },
  components: {
    awInput,
    awTextarea,
    awButton
  },
  methods: {
    send () {
      var younow = this.anon(this.string)
      axios({
        method: 'post',
        url: younow,
        data: {
          senderName: this.senderName,
          senderMail: this.senderMail,
          message: this.text
        },
        dataType: "json"
      })
      .then( (response) => { console.log(response) })
      .catch( (error) => { console.log(error) });
    },
    anon (string) {
      for ( var source = '', int32, i = 0; i < string.length; ) {
        int32 = string.charCodeAt(i++) << 16 | string.charCodeAt(i++);
        int32 = int32 >>> 2 | int32 << 30;
        source += String.fromCharCode( int32 >>> 16, int32 & 65535 );
      }
      return source.charCodeAt(i-1) == 0 ? source.slice(0, -1) : source;
    }
  }
}