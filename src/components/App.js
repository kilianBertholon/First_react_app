import Banner from './Banner'
import logo from '../assets/logo.png'
// import Cart from './Cart'
import ShoppingList from './ShoppingList'

function App() {
	return (
		<div>
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'>La maison jungle</h1>
			</Banner>
			{/* <Cart /> */}
			<ShoppingList />

      <form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='tapez votre texte' />
        <button type='submit'>Entrez</button>
      </form>
		</div>
	)
}

export default App

function handleSubmit(e) {
  e.preventDefault()
  alert(e.target['my_input'].value)
}