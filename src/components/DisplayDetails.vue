<template >
	<div class="details" v-if="visible">
		<p><b>Name:</b> {{details[0].name}}</p>
		<p><b>Phone:</b> {{details[0].phone}} &nbsp; &nbsp;<b>Email:</b> {{details[0].email}}</p>
		<p></p>
		<p><b>Is Favorite?</b> {{details[0].is_favorite ? "Yes" : "No"}}</p>
		<p class="close-btn" @click="closeDetails">Close details</p>
	</div> 
</template>

<<script>
export default {
	props: ['details', 'visible'],
	methods: {
		closeDetails (event) {
			this.$emit('show', false)
		}
	}
}
</script>

<style scoped lang="sass">
	.details
		width: 400px
		margin: 0 auto
	.close-btn
		width: 100%
		text-align: center
		text-decoration: underline
		cursor: pointer
</style>
