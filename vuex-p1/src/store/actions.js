export default { //methods
    getStudents(context) {
        context.commit('setStudents')
    },
    addTeamMember(context, data) {
        context.commit('pushTeamMember', data);
        context.commit('enableSelectedState', data.index);
    },
    removeTeamMember(context, data) {
        context.commit('sliceTeamMember', data);
        context.commit('disableSelectedState', data.member);
    }
};