import FormUpload from './src/upload';

// eslint-disable-next-line
FormUpload.install = function(Vue) {
  Vue.component(FormUpload.name, FormUpload);
};

export default FormUpload;
