export default {
  methods: {
    requestBefore(options) {
      if (!options) {
        options = {}
      }
      this.$toast(Object.assign({
        type: 'loading',
        message: "加载中···",
        duration: 0,
      }, options));
    },
    requestAfter(options) {
      this.$toast.clear();
      if (options && options.type) {
        this.$toast(Object.assign({
          message: options.type === 'success' ? '加载成功' : '加载失败',
          duration: 2000,
          onClose: () => {
            return Promise.resolve()
          }
        }, options));
      }
    },
  },
}
