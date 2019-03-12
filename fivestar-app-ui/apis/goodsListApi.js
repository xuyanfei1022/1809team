export const fetchUrl = "http://localhost:3333/goodsListData"
export default {

  getData(cb){
    fetch(fetchUrl).then(res => {
      res.json().then(data => {
        cb(data)
      })
    })
  }
}
