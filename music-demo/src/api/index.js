//api文件下 哥哥请求模块js，都统一来到index.js再向外导出
import {
    recommendMusic,
    newMusic
} from './Home'
import {
    hotSearch,
    searchResultList
} from './Search'
import {
    getSongById,
    getLyricById
} from './Play'
export const recommendMusicAPI = recommendMusic //请求推荐歌单的方法导出
export const newMusicAPI = newMusic //首页

export const hotSearchAPI = hotSearch //搜索 - 热搜关键词

export const searchResultListAPI = searchResultList

export const getSongByIdAPI = getSongById
export const getLyricByIdAPI = getLyricById