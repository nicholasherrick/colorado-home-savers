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

        <nav>
          <ul>
            <li>
              <a href='#1'>The Foreclosure Timeline</a>
            </li>
            <li>
              <a href='#2'>Rule 21 Hearing</a>
            </li>
            <li>
              <a href='#3'>Deficiency Judgements</a>
            </li>
            <li>
              <a href='#4'>Avoiding Foreclosure</a>
            </li>
            <li>
              <a href='#5'>Options to Avoid Foreclosure</a>
            </li>
            <li>
              <a href='#6'>Single Point of Contact Requirement</a>
            </li>
            <li>
              <a href='#7'>Applicability</a>
            </li>
          </ul>
        </nav>

        <article className='foreclosure-article'>
          <h1 id='1'>
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
          <h1 id='2'>RULE 21 HEARING</h1>
          <hr />
          <p>
            Even though the most common type of foreclosure process in Colorado
            is considered nonjudicial, the court plays a minor part in the
            procedure. As part of the process, the lender’s attorney files a
            motion under Rule 120 of the Colorado Rules of Civil Procedure
            asking the court for an order that authorizes the foreclosure sale.
            After the lender files the motion, the clerk sets a deadline for
            responses. The lender then serves a notice to the borrower about the
            right to file and serve a reply no less than 14 days before the
            response deadline. A borrower's response is limited to four issues:
          </p>
          <ul>
            <li>whether the borrower is in default</li>
            <li>
              whether the borrower is in the military (and therefore entitled to
              protections under the Servicemembers Civil Relief Act)
            </li>
            <li>whether the moving party is the real party in interest, and</li>
            <li>
              whether the status of any request for a loan modification
              agreement bars a foreclosure sale as a matter of law.
            </li>
          </ul>
          <p>
            If the borrower doesn’t respond—most don’t—the court typically
            cancels the hearing and enters an order that allows the foreclosure
            sale. If the borrower does respond by raising a potentially
            legitimate defense, the court will set a hearing, called a "Rule 120
            hearing."
          </p>
          <h1 id='3'>DEFICIENCY JUDGEMENTS</h1>
          <hr />
          <p>
            Colorado foreclosures are usually nonjudicial, which means a lender
            has to follow a series of mostly out-of-court steps and then holds a
            foreclosure sale where the property is sold to a new owner. At the
            foreclosure sale, the sale price might be less than the amount the
            borrower owes on the mortgage. The difference between the sale price
            and the total mortgage debt is called a “deficiency.”
          </p>
          <p>
            For example, suppose Tom loses his home to a foreclosure. At the
            foreclosure sale, the property sold to a new owner for $250,000.
            Because Tom owed the lender $300,000, the deficiency is $50,000.
            Under Colorado law, the lender can then file a lawsuit against Tom
            to get a judgment—called a deficiency judgment—for the amount of the
            deficiency.
          </p>
          <p>
            Once it gets a judgment, the lender may then use regular collection
            techniques, like garnishing Tom’s wages or levying Tom’s bank
            account, to collect the deficiency judgment. Or, rather than trying
            to collect the deficiency judgment itself, the lender might sell the
            judgment to a debt buyer who might then come after Tom for the
            deficiency amount. Under Colorado law, the lender has six years to
            file a lawsuit asking a court for a deficiency judgment.
          </p>
          <p>
            For this reason, it is imperative that you avoid foreclosure and a
            potential deficiency judgement. Colorado Home Savers will work to
            help you avoid this outcome.
          </p>
          <h1 id='4'>AVOIDING FORCLOSURE</h1>
          <hr />
          <p>
            There are many ways to avoid foreclosure. The one that is right for
            you depends on your situation. Give us a call at{' '}
            <a href='tel:7205155204'>(720) 515-5204</a> and we will be happy to
            give you a free, no-cost, no obligation explanation of what we think
            is the best path for you based on your situation. It is illegal for
            anyone acting as a foreclosure consultant to charge an up-front fee
            or deposit for foreclosure-related services. Call us soon. The more
            time you have, based on the timeline, the more likely you are to
            have a good resolution to avoid foreclosure.
          </p>
          <h1 id='5'>OPTIONS TO AVOID FORECLOSURE</h1>
          <hr />
          <p>
            If you want to try and keep your house there are several different
            paths you might take. For instance, some banks will allow you to get
            a loan modification through their Loss Mitigation Department. First
            you call up your lender and ask for a loan modification. They will
            then provide you many forms to fill out and request a lot of
            financial documents. This process is exhausting. You gather all the
            documents they request and send them, then they request more
            documents, or say they never received the original documents you
            sent. Precious time is passing as the loan modification process is
            underway but they will not withdraw the foreclosure. This is called
            <span> Dual Tracking.</span> You can determine pretty quickly
            whether or not your lender is seriously considering you for a loan
            modification or are just giving you the run around while your
            foreclosure auction/sale date approaches closer and closer. If the
            lender is serious about offering you a loan modification, then why
            do they continue the foreclosure process?
          </p>
        </article>
      </div>

      <Footer />
    </div>
  );
}
