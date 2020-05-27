import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Footer from '../components/Footer';
import Graph from '../assets/img/Denver-Foreclosures.gif';

export default function Foreclosure() {
  return (
    <div className='foreclosure'>
      <div className='content-wrap'>
        <Navbar foreclosure='active' />

        <Jumbotron title='Foreclosure Information' />

        <article className='foreclosure-article'>
          <h1>
            <i class='far fa-clock'></i> The Foreclosure Timeline
          </h1>
          <hr />
          <p>
            Most people do not realize that there is a lot of time built into
            the Colorado foreclosure process. Once you stop paying your
            mortgage, typically after three missed mortgage payments, maybe
            more, your mortgage lender takes action. This process may be
            different if you have just ended a forbearance period. Depending on
            the terms of your forbearance agreement, they may take action after
            just one missed payment at the end of the forbearance. When they do
            decide to take action, your lender has to file for foreclosure with
            the Public Trustee of the County your property resides in. This
            filing is called a Notice of Election and Demand (NED). They have to
            publish their intent to foreclose in several publications. This
            process can take several weeks. Once this process is complete, the
            Public Trustee sets an auction, or sale date, which is anywhere from
            110 to 125 days out from the point the notices are published. After
            the Notice of Election and Demand has been recorded, the public
            trustee must mail a combined notice of sale, right to cure, and
            right to redeem to the borrower within 20 calendar days after the
            recording date. The trustee must mail the notice again between 45
            and 60 days before the sale date. However, when it comes to
            agricultural properties, the sale can’t be less than 215 or more
            than 230 calendar days from the NED’s recording date. This auction,
            or sale date, is the deadline to save your property by noon the day
            before the date of the auction. If you file an Intent to Cure, no
            later than 15 calendar days before the auction, the Public Trustee
            will send you the cure figure which is the amount you need to come
            up with by the deadline to remove the foreclosure.{' '}
          </p>
          <p>
            As you can see, once you stop paying your mortgage, you have at
            least six months, maybe longer, to save your property before it can
            be taken away from you. For one of our clients the foreclosure
            process took more than two years. Unfortunately for this family,
            they moved out of the house, against our recommendation, as soon as
            they stopped paying the mortgage and began renting a separate house,
            vacating the home that was being foreclosed upon. The couple said
            they wanted to get settled somewhere so they didn’t have to uproot
            their kids from schools, friends, etc. They could have lived in
            their home for more than two years without paying a dime in mortgage
            or rent payments, so it is important to NOT move out of your house.
            Each case is different. Let the process unfold until you are sure of
            the exact deadline. Colorado Home Savers has been successful in many
            cases extending the auction date out further and further, while we
            negotiate with your bank, giving clients even more time to avoid
            foreclosure.
          </p>
          <img src={Graph} alt='' />
          <p>
            Now that you know the timeline you can see how long you have to
            avoid foreclosure. Avoiding foreclosure is so important. Unlike a
            bad mark on your credit report which is removed from your record
            usually within six to ten years, a foreclosure is forever and is
            always in the county records where you reside. A creditor can always
            search foreclosure history. It is important to not lose your home to
            foreclosure.
          </p>
        </article>
      </div>

      <Footer />
    </div>
  );
}
