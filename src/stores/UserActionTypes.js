export const UserActionTypes  = {
    //Set initial state of titles
    INITIALIZE : 'INITIALIZE',
    // Only one among multiple operation can be active
    // Make other operations inactive automatically
    SET_ACTIVE_TITLE : 'SET_ACTIVE_TITLE',
    // Delete operation from list when user deletes it
    DELETE_TITLE: 'DELETE_TITLE',
    // close tab
    CLOSE_TAB:'CLOSE_TAB',
    //switch tab
    SWITCH_TAB:'SWITCH_TAB',
    //Click title
    CLICK_TITLE: 'CLICK_TITLE',
    //refresh all titles
    REFRESH_TITLES: 'REFRESH_TITLES',
    //Sets inpit pros to the state
    SET_INPUT_PROPS: 'SET_INPUT_PROPS',
}