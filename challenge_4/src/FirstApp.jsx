import PropTypes from 'prop-types'

const FirstApp = ({title='nnn', sum=300}) => {
    return(
        <>
            <h1>{title}</h1>
            <span>{sum}</span>
        </>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    sum: PropTypes.number.isRequired
}


export default FirstApp;