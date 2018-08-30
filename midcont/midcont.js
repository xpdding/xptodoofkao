const userModle = require('../mysql/mysql')

exports.usertest = async ctx => {
  console.log('------正在执行测试-------')
  await userModle.findAllUsers().then((res, err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(res)
      ctx.body = res
    }
  })
}

exports.PostAndUpdateDataOfBigJS = async ctx => {
  console.log('---PostAndUpdateDataOfBigJS---')
  console.log(ctx.request.body)
  // let t = ["33","332","33","332","ssss","9999999999"]
  let dall = ctx.request.body
  let dyear = dall.datayear
  let dmonth = dall.datamonth
  let dtype = dall.datatype
  let dwho = dall.whoin
  let dsublist = dall.data126
  for (sub of dsublist) {
    console.log(sub)
    let findinlist = [sub[0], sub[1], dyear, dmonth, dtype]
    console.log(findinlist)
    let flagR = await userModle.findDataOfBigJS(findinlist).then((res, err) => {
      if (err) {
        console.log(err)
      } else {
        let r = res[0]['count(*)']
        console.log(r)
        return r
      }
    })
    console.log(flagR)
    if (flagR === 0) {
      let putlist = [...findinlist, sub[2], dwho]
      await userModle.putDataOfBigJS(putlist).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
    } else {
      let updatelist = [sub[2], dwho, ...findinlist]
      await userModle.updateDataOfBigJS(updatelist).then((res, err) => {
        if (err) {
          console.log(err)
        } else {
          console.log(res)
        }
      })
    }
  }
  ctx.body = {
    msg: '12222'
  }
}

exports.getDataOfC2018ByJgEveryMonth = async ctx => {
  console.log('---------------');
  console.log(ctx.request.body);
  console.log('---------------');
  await userModle.getDataOfC2018ByJgEveryMonth().then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      ctx.body = {
        msg: 200,
        data: res
      }
    }
  })
}

exports.getDataOfC2018ByJgEveryDay = async ctx => {
  // console.log('---------------');
  // console.log(ctx);
  // console.log('---------------');
  await userModle.getDataOfC2018ByJgEveryDay().then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      ctx.body = {
        msg: 200,
        data: res
      }
    }
  })
}


exports.getDataOfC2018ByJgEveryDayAndEveryOne = async ctx => {
  console.log('---------------');
  console.log(ctx);
  console.log('---------------');
  // let temp = "TK00030359"
  let searchno = ctx.request.body.searchno
  await userModle.getDataOfC2018ByJgEveryDayAndEveryOne(searchno).then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      ctx.body = {
        msg: 200,
        data: res
      }
    }
  })
}

exports.findAllYwy = async ctx=>{
  await userModle.findAllYwy().then((res, err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      ctx.body = {
        msg: 200,
        data: res
      }
    }
  })
}