import React from 'react'

const localeOptions = [
  { locale: 'English', greeting: 'Hello' },
  { locale: 'Spanish', greeting: 'Hola' },
  { locale: 'French', greeting: 'Bonjour' },
  { locale: 'German', greeting: 'Guten Tag' }
]

const LocalizedGreeting = (locale) => {
  let greeting = '';
  if (!locale.locale) {
    greeting = 'Hello';
  } else {
    greeting = localeOptions.find(option => locale.locale === option.locale).greeting;
  }

  return <h1 id="greeting">{greeting}!</h1>
}

class Greeter extends React.Component {
  state = {
    selectedLocale: localeOptions[0].locale
  }

  selectLocale = (e) => {
    const locale = e.target.innerText
    this.setState({ selectedLocale: locale })
  }

  render() {
    const languageOptions = localeOptions.map(option => {
      return (
        <button key={option.greeting} onClick={this.selectLocale}>
          {option.locale}
        </button>
      )
    })

    return (
      <div>
        <LocalizedGreeting locale={this.state.selectedLocale} />
        <h2>Select a language to be greeted in</h2>
        {languageOptions}
      </div>
    )
  }
}

export default Greeter