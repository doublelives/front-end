import React, { useState } from 'react'
import logoImg from './construction_pic@2x.png'
import './index.scss'

type AsideType = "out"|"in"

function BaseLayout(props: any) {
  let { logo = logoImg } = props;
  let asideType:AsideType, setAsideType: any;
  [asideType , setAsideType] = useState('out');
  const arrowClick = () => {
    setAsideType(asideType === 'in' ? 'out' : 'in')
  }
  return <div className="page">
    <header>
      <div className="logo-wrapper">
        <img className="logo animate__animated animate__pulse" alt="这里是图标" src={logo} />
      </div>
      <div className="content">搞咩呀！</div>
    </header>
    <main>
      <aside className={`aside-${asideType}`}>
        <div>我是侧边栏</div>
        {
          asideType === 'out' ? <section className="arrow" onClick={arrowClick}>《</section> : <section className="arrow" onClick={arrowClick}>》</section>
        }
      </aside>
      <section>我是主体</section>
    </main>
  </div>
}

export default BaseLayout