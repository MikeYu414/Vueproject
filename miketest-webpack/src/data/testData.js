import dog6 from '../assets/photos/dog6.jpeg';
import dog7 from '../assets/photos/dog9.jpeg';
import dog8 from '../assets/photos/dog8.jpeg';
import dog2 from '../assets/photos/dog2.jpeg';
import dog3 from '../assets/photos/dog3.jpeg';
import dog4 from '../assets/photos/dog4.jpeg';
import dog5 from '../assets/photos/dog5.jpeg';

export const testData = {
    data() {
        return {
            cardDatas:[
                {
                    photoUrl: dog6,
                    cardTitle: '我爱狗狗网',
                    cardDescription: '52狗狗网是中国宠物狗门户网站,分享狗狗饲养,宠物狗价格行情,狗狗美容,狗狗训练,狗狗疾病防治,狗狗图片,狗狗视频欣赏,驯养,买卖,视频,宠物用品等服务',
                    linkUrl: "http://www.52gougouwang.com/",
                },
                {
                    photoUrl: dog7,
                    cardTitle: '训狗教程网',
                    cardDescription: '宠物狗交流学习门户,分享最有效的训狗教程,训狗视频教程,电子教程,狗,狗狗知识,训狗方法,提供狗狗医疗,驯养,买卖,视频,宠物用品等服务',
                    linkUrl: "http://www.btbsm.com/",
                },
                {
                    photoUrl: dog8,
                    cardTitle: '查狗网',
                    cardDescription:'宠物狗交流学习综合门户,提供狗狗的喂养,训练,买卖,美容,繁殖,视频,宠物用品等服务,在这里你可以认识更多爱狗共同分享学习,养狗心得,知识,爱狗就上查狗网。',
                    linkUrl: "https://www.chagougou.com/",
                }
            ],
            linkInfors: [
                {
                  title: "友情链接",
                  links: [
                    {
                      name: "百度",
                      url: "https://www.baidu.com",
                    },
                    {
                      name: "菜鸟教程",
                      url: "https://www.runoob.com/",
                    },
                    {
                      name: "Ant Design",
                      url: "https://www.antdv.com",
                    },
                    {
                      name: "网道",
                      url: "https://www.wangdoc.com/"
                    },
                    {
                      name: "Vue.js",
                      url: "https://cn.vuejs.org/"
                    },
                  ],
                },
                {
                  title: "新闻",
                  links: [
                    {
                      name: "百度新闻",
                      url: "https://news.baidu.com/",
                    },
                    {
                      name: "微博头条",
                      url: "https://weibo.com/?category=1760",
                    },
                    {
                      name: "腾讯新闻",
                      url: "https://news.qq.com/",
                    },
                  ],
                },
                {
                  title: "求职",
                  links: [
                    {
                      name: "BOSS直聘",
                      url: "https://www.zhipin.com/",
                    },
                    {
                      name: "前程无忧",
                      url: "https://mkt.51job.com/",
                    },
                    {
                      name: "智联招聘",
                      url: "https://landing.zhaopin.com/",
                    },
                  ],
                },
            ],
            carouselDatas: {
                images: [
                  {
                    alt: 'dog2',
                    photoUrl: dog2
                  },
                  {
                    alt: 'dog3',
                    photoUrl: dog3
                  },
                  {
                    alt: 'dog4',
                    photoUrl: dog4
                  },
                  {
                    alt: 'dog5',
                    photoUrl: dog5
                  },
                ],
                auto: true
            },
            userInfo: {
              userName: 'Mike.Yu',
              userPhoto: '',
              userState: '',
            }

        }
    }
}