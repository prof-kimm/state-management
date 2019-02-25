export default {
  name: 'loginPage',
  components: {},
  data() {
    return {
      formData: {
        email: null,
        password: null,
      },
      rules: {
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' }
        ]
      },
      isFormValidated: false,
    };
  },
  methods: {
    updateIsFormValidated() {
      const fields = this.$refs.formData.fields;
      this.isFormValidated = fields.reduce((acc, field) => {
        let valid = (field.isRequired && field.validateState === 'success');
        let noError = (!field.isRequired && field.validateState !== 'error');
        return acc && (valid || noError);
      }, true);
    },
    signIn() {
      if (this.isFormValidated) {
      /* eslint-disable */
        console.log(this.formData.email);
        console.log(this.formData.password);
        this.$store.dispatch('LOG_IN', {
          email: this.formData.email,
          password: this.formData.password
        });
      }
    }
  }
};
