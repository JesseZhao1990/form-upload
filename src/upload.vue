<template>
    <el-upload
      ref="ElUpload"
      v-bind="$props"
    >
      <slot></slot>
    </el-upload>
</template>
<script>
export default {
  name: 'formUpload',
  componentName: 'formUpload',
  props: [
    'value', 'action', 'headers', 'multiple', 'data', 'show-file-list', 'name', 'with-credentials', 'drag',
    'accept', 'on-preview', 'on-remove', 'on-success', 'on-error', 'on-progress', 'on-change',
    'before-upload', 'before-remove', 'list-type', 'auto-upload', 'file-list', 'http-request',
    'disabled', 'limit', 'on-exceed',
  ],
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    // eslint-disable-next-line
    value(val, oldValue) {
      this.setCurrentValue(val);
    },
    // eslint-disable-next-line
    fileList(val, oldValue) {
      this.setCurrentValue(val);
    },    
  },
  methods: {
    clearFiles() {
      this.$refs.ElUpload.clearFiles();
    },
    abort(file) {
      this.$refs.ElUpload.abort(file);
    },
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit(...[eventName].concat(params));
      }
    },

    setCurrentValue(value) {
      this.currentValue = value;
      this.dispatch('ElFormItem', 'el.form.change',  [].concat(value));
    },
  },
};
</script>
