import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Jumbotron from '../../components/Jumbotron';
import ContactCardLarge from '../../components/ContactCardLarge';

const Foreclosure = () => {
  return (
    <div>
      <Navbar foreclosure='active' />
      <div className='text-center'>
        <Jumbotron title='Foreclosure Help' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mt-4'>
            <ContactCardLarge
              cardTitle='The Foreclosure Timeline'
              text='Many people do not realize that there is a lot of time in the
              Colorado foreclosure process. First you miss at least three
              mortgage payments, maybe more, before your mortgage lender takes
              action. Then they have to file for foreclosure with the Public
              Trustee of the County your property resides in. This is called a
              Notice of Election and Demand (NED). They have to publish their
              intent to foreclose in several publications. This process can take
              several weeks. Once this process is done, the Public Trustee sets
              an auction or sale date which is anywhere from 110 to 130 days
              out. This auction, or sale date, is the deadline to save your
              property by noon the day before the date of the auction. As you
              see, once you stop paying your mortgage, you have at least six
              months, maybe much longer, to work to save your property before it
              can be taken away from you. I had a client once where the
              foreclosure process took more than two years. Unfortunately for
              him, he moved his family out of the house, against my
              recommendation, as soon as he stopped paying his mortgage and
              began renting. He said he wanted to get settled somewhere so he
              didn’t have to uproot his kids from schools, friends, etc. He
              could have lived in his home for more than two years without
              paying a dime in mortgage or rent payments, so it is important to
              NOT move out of your house. Let the process unfold until you are
              sure of the exact deadline. I have been successful in many cases
              extending the auction date out further and further, giving my
              clients even more time to avoid foreclosure.'
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center'>Images here</p>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <ContactCardLarge
              text='Now that you know the timeline you can see how long you have to
              avoid foreclosure. Avoiding foreclosure is so important. Unlike a
              bad mark on your credit report which is removed from your record
              usually within six to ten years, a foreclosure is forever and is
              always in the county records where you reside. It is important to
              not lose your home to foreclosure.'
              text2='There are many ways to avoid foreclosure. The one that is right
              for you depends on your situation. Give me a call at 720-291-2126
              and I will be happy to give you a free no-cost explanation of what
              I think is the best path for you based on your situation. But call
              soon. The more time you have based on the time line I explained
              earlier, the more likely you are to have a good resolution to
              avoid foreclosure.'
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Foreclosure;
