import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class NewsForm extends Component {
    render() {
        const { handleSubmit } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Field
                    component="input"
                    name="name"
                    placeholder="Nombre de noticia"
                />
            </form>
        )
    }
}

export default reduxForm({
    form: 'news',
})(NewsForm)