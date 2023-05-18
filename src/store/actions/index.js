export const updateCount = (id, count) => ({
    type: 'UPDATE_COUNT',
    payload: { id, count }
})

export const saveUserData = (data) => ({
    type: 'SAVE_USER_DATA',
    payload: data
})