import * as React from 'react';

interface Props {
  count: number;
}

const Count: React.FunctionComponent<Props> = (props) => {
  return <h1>{props.count}</h1>
};

export default Count;

// export default class Count extends React.Component<Props> {
//   static defaultProps: Props = {
//     count: 10
//   };
//
//   render () {
//     return <h1>{this.props.count}</h1>
//   }
// }