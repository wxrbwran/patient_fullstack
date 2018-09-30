/**
 * Created by wuxiaoran on 2017/8/2.
 */
// @flow
export default function changeStateByValue(self, name, value) {
  self.setState({
    [name]: value,
  });
}
