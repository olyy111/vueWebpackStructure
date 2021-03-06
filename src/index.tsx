import { hot } from 'react-hot-loader/root';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styles from './index.css'
import styles2 from './index.scss'
import News from './New.tsx'
console.log(styles)
interface AppState {
  temperature: number,
  himidity: number
}
class App extends React.Component<{}, AppState> {
  constructor(props) {
    super(props)
    this.state = {
      temperature: 0,
      himidity: 0,
    }
  }
  componentDidMount() {
    // throw new Error("don't allowed into the component")
    console.log('当前环境是', process.env.NODE_ENV)
    // fetch('/weather')
    //   .then(res => {
    //     return res.json()
    //   })
    //   .then(weatherJson => {
    //     this.setState({...this.state, ...weatherJson})
    //   })
  }
  render() {
    return <div>
     <h2 className={styles.title}>hello， 这是一个react应用</h2>
     <p className={styles2.content}>react 是一个mvvm 框架</p>
     <div>
        <h3>江西天气预报</h3>
        <p>温度: {this.state.temperature} </p>
        <p>湿度: {this.state.himidity}</p>
     </div>
     <News></News>
    </div>
  }
}

const HotApp = hot(App)
ReactDOM.render(
  <HotApp />,
  document.getElementById('root')
)