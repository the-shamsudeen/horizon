import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
const loggedIn = {firstName: 'Theshamsudeen',
   lastName: 'Ibrahim', email: 'imuhammadshamsudeen@gmail.com'}

  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
          type = "greeting"
          title = "Welcome"
          user = {loggedIn.firstName || "Guest"}
          subtext = "Access and manage your accounts and transactions efficiently."
          />

          <TotalBalanceBox
          accounts = {[]}
          totalBanks = {1}
          totalCurrentBalance = {1250.50}
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 123.50}, {currentBalance: 500.50}]}
      />
    </section>
  )
}

export default Home