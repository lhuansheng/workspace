
function demo1() {
  return (
    <>
    <style jsx>
      {
        `
        div{color:blue;}
        .lhs{color:pink;}
        `
      }
    </style>
      <div>小名上课迟到了</div>
      <div className="lhs">小名上课迟到了</div>

    </>
  )
}

export default demo1
