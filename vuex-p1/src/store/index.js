import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

import data from "../api/data";
import state from './state';
import actions from './actions';

const info = {
    namespaced: true,
    state: {
        matchDate: '01-02-2021'
    },
    getters: {
        teamACount(state, getters, rootState) {
            return rootState.teamA.length;
        }
    },
    actions: {},
    mutations: {},
}

export default new Vuex.Store({
    modules: {
        info: info
    },
    state,
    /* state: { //data
        students: [],
        teamA: [],
        teamB: []
    }, */
    getters: { // computed properties
        studentCount(state, getters) {
            return state.students.length;
        },
    },
    actions,
    mutations: { //used for changing the state
        setStudents(state) {
            state.students = data.getStudents();
        },
        pushTeamMember(state, data) {
            if (data.type === 'A') {
                state.teamA.push(state.students[data.index])
            } else {
                state.teamB.push(state.students[data.index])
            }
        },
        enableSelectedState(state, index) {
            state.students[index].selected = true;
        },
        sliceTeamMember(state, data) {
            if (data.type === 'A') {
                state.teamA.splice(data.index, 1)                
            } else {
                state.teamB.splice(data.index, 1)
            }
        },
        disableSelectedState(state, member) {
            state.students.forEach((student) => {
                student.id === member.id ? student.selected = false : '';
            })
        }
    },
});