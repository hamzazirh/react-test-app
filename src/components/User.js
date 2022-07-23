import PropTypes from 'prop-types';

function User({ name, id, age, status, friends }) {
    return (
        <>
            <h1>User {name}</h1>
            {
                friends.map((friend , index) => <div key={friend.id}> {friend.id} - {friend.name}</div> )
            }
        </>
    )
}

export default User;

User.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    age: PropTypes.number.isRequired,
    status: PropTypes.bool.isRequired,
    friends: PropTypes.array
}