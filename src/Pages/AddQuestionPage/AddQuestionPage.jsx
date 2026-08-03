import { useActionState, useEffect, useRef } from 'react'
import { toast } from 'react-toastify'
import { Button } from '../../components/Button'
import { API_URL } from '../../constants'
import { delayFn } from '../../helper/delayFn'
import cls from './AddQuestionPage.module.css'

const createCardAction = async (_prevState, formData) => {
	const newQuestion = Object.fromEntries(formData)
	const isClearForm = formData.get('clearForm') === 'on'

	try {
		await delayFn()

		const response = await fetch(`${API_URL}/react`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				question: newQuestion.question,
				answer: newQuestion.answer,
				description: newQuestion.description,
				resources: newQuestion.resources,
				level: Number(newQuestion.level),
				completed: false,
			}),
		})

		if (!response.ok) {
			throw new Error(`Request failed with status ${response.status}`)
		}

		const question = await response.json()

		toast.success('New question successfully created')

		return { clearForm: isClearForm, success: true, data: question }
	} catch (error) {
		toast.error(error?.message ?? 'Something went wrong')
		return { clearForm: isClearForm, success: false }
	}
}

export const AddQuestionPage = () => {
	const [formState, formAction, isPending] = useActionState(createCardAction, {
		clearForm: true,
	})

	const formRef = useRef(null)

	// сбрасываем форму после успешного сабмита, если чекбокс был отмечен
	useEffect(() => {
		if (formState.success && formState.clearForm) {
			formRef.current?.reset()
		}
	}, [formState])

	return (
		<>
			<h1 className={cls.fromTitle}>Add new question</h1>
			<div className={cls.fromContainer}>
				<form ref={formRef} action={formAction} className={cls.form}>
					<div className={cls.formControl}>
						<label htmlFor="questionField">Question: </label>
						<textarea
							defaultValue={formState.question}
							name="question"
							id="questionField"
							cols="30"
							rows="2"
							required
							placeholder="please enter a question"
						/>
					</div>

					<div className={cls.formControl}>
						<label htmlFor="answerField">Short answer: </label>
						<textarea
							defaultValue={formState.answer}
							name="answer"
							id="answerField"
							cols="30"
							rows="2"
							required
							placeholder="please enter a short answer"
						/>
					</div>

					<div className={cls.formControl}>
						<label htmlFor="descriptionField">Description: </label>
						<textarea
							defaultValue={formState.description}
							name="description"
							id="descriptionField"
							cols="30"
							rows="5"
							required
							placeholder="please enter a description"
						/>
					</div>

					<div className={cls.formControl}>
						<label htmlFor="resourcesField">Resources: </label>
						<textarea
							defaultValue={formState.resources}
							name="resources"
							id="resourcesField"
							cols="30"
							rows="1"
							required
							placeholder="please enter resources separated by comas"
						/>
					</div>

					<div className={cls.formControl}>
						<label htmlFor="levelField">Level: </label>
						<select name="level" id="levelField" defaultValue={formState.level}>
							<option value="" disabled>
								Question level
							</option>
							<option value="10">1 - easiest</option>
							<option value="20">2 - medium</option>
							<option value="30">3 - hardest</option>
						</select>
					</div>

					<label htmlFor="clearFormField" className={cls.clearFormField}>
						<input
							className={cls.checkbox}
							type="checkbox"
							name="clearForm"
							id="clearFormField"
							defaultChecked={formState.clearForm}
						/>
						<span>clear form after submitting?</span>
					</label>

					<Button isDisabled={isPending}>Add question</Button>
				</form>
			</div>
		</>
	)
}