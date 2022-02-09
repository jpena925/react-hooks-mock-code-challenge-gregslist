import React, { useState } from 'react'

function AdForm({handleAddAd}) {
    const [formData, setFormData] = useState({
        description: '',
        image: '',
        location: ''
    })

    function handleFormChange(e){
        let typeChange = e.target.name
        let valueChange = e.target.value

        setFormData((formData) => ({...formData, [typeChange]: valueChange}))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => handleAddAd(data))
        .then(setFormData(formData => ({
            description: '',
            image: '',
            location: ''
        })))
    }


  return (
    <div className="container">
			<form onSubmit={handleSubmit}>
				<h3>Submit an Ad!</h3>
				<input
					type="text"
					name="description"
                    value={formData.description}
					placeholder="Enter ad description..."
					className="input-text"
                    onChange={handleFormChange}
				    />
				<br />
				<input
					type="text"
					name="image"
                    value={formData.image}
					placeholder="Enter image URL..."
					className="input-text"
                    onChange={handleFormChange}
				/>
				<br />
                <input
					type="text"
					name="location"
                    value={formData.location}
					placeholder="Enter location..."
					className="input-text"
                    onChange={handleFormChange}
				/>
				<br />
				<input
					type="submit"
					name="submit"
					value="Create New Ad"
					className="submit"
				/>
			</form>
		</div>
  )
}

export default AdForm