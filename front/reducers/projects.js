function projects(state = [] , action) {
    switch (action,type) {
        case 'RECENT_PROJECT_SUCCEEDED':
            return action,projects;

        default:
            return state;
    }
}

export default projects;

