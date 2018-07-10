import React from 'react'
import { connect } from 'react-redux'

import composeStyledComponent from '../../utils/composeStyledComponent.jsx'
import { userSwitch } from '../../app/redux/actionCreators.js'
import { users } from '../../app/data.js'

import Link from '../Link.jsx'


const mapStateToProps = state => ({
    user: state.user,
})

const mapDispatchToProps = dispatch => ({
    setUser: userId => dispatch(userSwitch(userId)),
})


const UserSelect = ({ styles, ...props }) =>
    <div style={styles.container}>
        <p>Currently logged in as: {props.user}</p>
        <div style={styles.tileContainer}>
            {users.map(user =>
                <p key={user} style={styles.tile} onClick={() => props.setUser(user)}>
                    {user}
                </p>
            )}
        </div>
        <Link href='/'>Back to products</Link>
    </div>


const styles = props => ({

    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    tileContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        width: '420px',
        height: '320px',
        margin: '20px 0',
    },

    tile: {
        width: '200px',
        height: '150px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid #888',
        backgroundColor: '#eee',
        cursor: 'pointer',
    },

})

export default connect(mapStateToProps, mapDispatchToProps)(
    composeStyledComponent(UserSelect, styles)
)
