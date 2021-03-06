import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class CategoryForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    component="input"
                    name="name"
                    placeholder="Nombre de categoria"
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'category',
})(CategoryForm)