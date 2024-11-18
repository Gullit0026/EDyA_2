export const Title = ({total, missing}) => {
    return (
      <>
        <h1>TodoApp: {total}</h1>
        <h1>Pendientes: {missing}</h1>
        <hr />
      </>
    )
  }