import homeImg from '@/assets/systemIcon/home.png'
import serveImg from '@/assets/systemIcon/serve.png'
import userImg from '@/assets/systemIcon/mine.png'
import homeImgActive from '@/assets/systemIcon/home-act.png'
import serveImgActive from '@/assets/systemIcon/serve-act.png'
import userImgActive from '@/assets/systemIcon/mine-act.png'

const barModel = [
  {
    imgSrc: homeImg,
    imgSrcActive: homeImgActive,
    path: '/',
    label: '首页',
    selected: true
  },
  {
    imgSrc: serveImg,
    imgSrcActive: serveImgActive,
    path: '/sort',
    label: '分类',
    selected: false
  },
  {
    imgSrc: userImg,
    imgSrcActive: userImgActive,
    path: '/report',
    label: '报告',
    selected: false
  }
]
export default barModel
