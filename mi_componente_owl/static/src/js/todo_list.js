/** @odoo-module **/

import { Component, useState } from '@odoo/owl';
import { registry } from '@web/core/registry';

export class TodoList extends Component {
    static template = 'mi_componente_owl.TodoList';

    setup() {
        this.state = useState({
            tasks: [],
            newTask: ''
        });
    }

    addTask() {
        if (this.state.newTask.trim()) {
            this.state.tasks.push({
                id: Date.now(),
                text: this.state.newTask,
                done: false
            });
            this.state.newTask = '';
        }
    }

    toggleTask(taskId) {
        const task = this.state.tasks.find(t => t.id === taskId);
        if (task) task.done = !task.done;
    }

    removeTask(taskId) {
        const index = this.state.tasks.findIndex(t => t.id === taskId);
        if (index > -1) this.state.tasks.splice(index, 1);
    }

    onInputChange(ev) {
        this.state.newTask = ev.target.value;
    }
    onKeyup(ev) {
       if (ev.key === 'Enter') {
            this.addTask();
        }
    }


}

registry.category('actions').add('mi_componente_owl.todo_action', TodoList);