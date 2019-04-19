/* eslint-disable */
import jsonp from 'em-jsonp';

const afterLogin = (callbackUrl, inow, self, callback) => {
  let theIndex = inow;
  const urlSplit = callbackUrl[theIndex].split('?');
  const newUrl = urlSplit[0];
  let data = urlSplit[1];
  data = data.replace(/=/g, '":"').replace(/&/g, '","');
  data = JSON.parse(`{"${data}"}`);
  window.$jsonp({
    url: newUrl,
    data,
    success: (res) => {
      if (res.code === 10000) {
        if (theIndex === 0) {
          callback();
        } else {
          afterLogin(callbackUrl, --theIndex, self, callback);
        }
      } else {
        if (self.$EmfeMessage) {
          self.$EmfeMessage.error({
            content: `${self.logut}失败`,
          });
        }
      }
    },
    error: () => {
      if (self.$EmfeMessage) {
        self.$EmfeMessage.error({
          content: `${self.logut}失败`,
        });
      }
    },
  });
};

export default (result, orgId, self, callback) => {
  afterLogin(result.data.url_list, result.data.url_list.length - 1, self, () => {
    let domainStr = self.domain || '';

    setTimeout(() => {
      window.$cookie.remove(`Authorization?org_id=${orgId}`, '/', domainStr);
      callback();
    }, 100);
  });
};
