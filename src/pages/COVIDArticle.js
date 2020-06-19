import React from 'react';
import NavigationBar from '../components/NavigationBar';
import { AllStyles } from '../style/GeneralStyles';
import  { ResourcesPageStyle } from '../style/PageStyles';
import { Layout } from '../components/Layout';
import Fade from 'react-reveal/Fade';

export const Article = () => (
  <React.Fragment>
    <AllStyles>
      <ResourcesPageStyle>
        <div className="page-header ">
          <Layout>
          <NavigationBar activePage="resources"/>
          <div className="full-article-header">
            <h2  className="full-article-title bold-text">New Additions to the Xenophobia Database: <br></br>Anti-Asian Hate in the Pandemic</h2>
            <p className="full-article-date">Last Updated: June 2020</p>
            <br></br>
            <p className="full-article-author italic-text">By: Beth Lyon, Associate Dean for Experiential Education and Clinical Program Director @ Cornell Law</p>
          </div>
          </Layout>
          
        </div>
        <Fade bottom>
        <div className="article-body-container">
          <p>In December 2019 doctors identified the first case of Coronavirus disease 2019 (COVID-19) in Wuhan, China. Although the actual origin of the disease is unknown, by February 2020, the UN High Commissioner for Human Rights reported “a disturbing wave of prejudice against people of Chinese and East Asian ethnicity.” In May, UN Secretary General António Guterres called the ongoing violence “a tsunami of hate and xenophobia, scapegoating and scare-mongering” and urged governments to “act now to strengthen the immunity of our societies against the virus of hate.”</p>
          <br></br>
          <p>The STOP AAPI HATE reporting center in Los Angeles began operations in mid-March 2020 and within two weeks received over 1,100 reports of coronavirus discrimination from Asian Americans across the United States. According to the journal Nature, when the pandemic began, more than 700,000 Chinese college students were studying at universities outside China. Many found themselves far away from home confronting virulent hate, including verbal and physical abuse. Human Rights Watch cites examples of attacks on people of Asian descent throughout the world including vicious beatings, verbal abuse, and people “being spat on, robbed at gunpoint, physically attacked for wearing a mask or even for confronting the person tormenting them.”</p>
          <br></br>
          <h4 className="bold-text">Irresponsible governments pile on</h4>
          <br></br>
          <p>U.S. President Donald Trump repeatedly and pointedly used the terms “Chinese virus” and “China virus” during the crucial early period: for more than three months after the WHO made a plea to stop using the geographic designation, and for more than six weeks after the WHO named the virus COVID-19. One of the notorious images of the COVID-19 era was a Washington Post photograph of President’s Trump’s notes from a coronavirus briefing showing the word “Corona” was crossed out and replaced with the word “Chinese.” U.S. Secretary of State Mike Pompeo consistently used the term “Wuhan virus.” CBS News’ White House correspondent, an Asian-American woman, reported that a White House staffer called the coronavirus the “Kung Flu” in conversation with her. According to CNN, Brazilian lawmaker Eduardo Bolsonaro called the virus “China’s fault.” Euractiv reported Hungarian Prime Minister Viktor Orbán’s conflation of the crisis with illegal migration, and Marian Kotleba, leader of the People’s Party Our Slovakia’s statement that “due to the open borders within the EU […], there are many migrants wandering across Europe without any control. And those people brought the coronavirus to Europe.”</p>
          <br></br>
          <h4 className="bold-text">Responsible governments counter hate speech</h4>
          <br></br>
          <p>In 2015, the World Health Organization implemented a ban on naming diseases in ways that feed discrimination and stigmatization. Under the new rules, a disease should no longer be named using its geographic origin (whether city, country, region or continent), a person’s name, an animal species, food, culture, or industry, or using “terms that incite undue fear.” The United Nations Committee on the Elimination of Racial Discrimination has urged each country to develop a “National Action Plan Against Racial Discrimination,” a kind of anti-xenophobia emergency plan, “to adopt special measures to eliminate conditions which cause or help to perpetuate racial discrimination.” In May 2020, the U.S. Commission on Civil Rights issued
“Recommendations to Secure Nondiscrimination in the COVID-19 Pandemic Context, and Specifically to Address Anti-Asian Racism and Xenophobia,” calling for “grants and training to local jurisdictions for addressing hate crimes and bias-motivated incidents” and for “working with Asian American organizations or organizations that provide assistance to Asian residents in our country to provide leadership and assurance that anti-Asian harassment, slurs, bullying, aggression, and violence are not to be tolerated and provide a direct line of communication for organizations to report instances of the same.” On May 22, 2020, Canadin President Justin Trudeau condemned the surge of anti-Asian hate crimes in that country, but did not explain what he was doing to address it.</p>
          <br></br>
          <div className="bibliography-container"></div>
          <h5>Bibliography</h5> 
          <br/>
          <a className="article-link" href="https://www.nature.com/articles/d41586-020-01009-0">https://www.nature.com/articles/d41586-020-01009-0</a>
          <br/><br/>
          <a className="article-link" href="https://www.cnn.com/2020/03/24/politics/donald-trump-pull-back-coronavirus-chinese-virus/index.html">https://www.cnn.com/2020/03/24/politics/donald-trump-pull-back-coronavirus-chinese-virus/index.html</a>
          <br/><br/>
          <a className="article-link" href="https://www.newyorker.com/culture/culture-desk/confronting-anti-asian-discrimination-during-the-coronavirus-crisis">https://www.newyorker.com/culture/culture-desk/confronting-anti-asian-discrimination-during-the-coronavirus-crisis</a>
          <br/><br/>
          <a className="article-link" href="https://www.euractiv.com/section/global-europe/news/covid-19-crisis-triggers-eu-racism-against-asians-rights-agency-says/">https://www.euractiv.com/section/global-europe/news/covid-19-crisis-triggers-eu-racism-against-asians-rights-agency-says/</a>
          <br/><br/>
          <a className="article-link" href="https://www.aljazeera.com/news/2020/04/anti-asian-hate-continues-spread-online-covid-19-pandemic-200405063015286.html">https://www.aljazeera.com/news/2020/04/anti-asian-hate-continues-spread-online-covid-19-pandemic-200405063015286.html</a>
          <br/><br/>
          <a className="article-link" href="https://www.forbes.com/sites/brucelee/2020/05/26/covid-19-coronavirus-continues-to-expose-anti-asian-bigotry-how-to-stop-it/#6d8f991148a4">https://www.forbes.com/sites/brucelee/2020/05/26/covid-19-coronavirus-continues-to-expose-anti-asian-bigotry-how-to-stop-it/#6d8f991148a4</a>
          <br/><br/>
          <a className="article-link" href="https://scandasia.com/xenophobia-against-asians-in-finland-prompted-by-the-coronavirus/">https://scandasia.com/xenophobia-against-asians-in-finland-prompted-by-the-coronavirus/</a>
          <br/><br/>
          <a className="article-link" href="https://www.scmp.com/news/china/article/3083228/covid-19-scapegoats-chinese-canadian-group-denounces-anti-asian-hate">https://www.scmp.com/news/china/article/3083228/covid-19-scapegoats-chinese-canadian-group-denounces-anti-asian-hate</a>
          <br/><br/>
          <a className="article-link" href="https://www.usccr.gov/press/2020/05-08-Anti-Asian-Discrimination.pdf">https://www.usccr.gov/press/2020/05-08-Anti-Asian-Discrimination.pdf</a>
          <br/><br/>
          <a className="article-link" href="https://www.aaldef.org/news/reuters-u.s.asians-harassed-over-coronavirus-push-back-on-streets-social-media/">https://www.aaldef.org/news/reuters-u.s.asians-harassed-over-coronavirus-push-back-on-streets-social-media/</a>
          <br/><br/>
          <a className="article-link" href="https://www.huffingtonpost.ca/entry/trudeau-vancouver-anti-asian-hate-crimes_ca_5ec82050c5b6e549e05d3ef7">https://www.huffingtonpost.ca/entry/trudeau-vancouver-anti-asian-hate-crimes_ca_5ec82050c5b6e549e05d3ef7</a>
          <br/><br/>
          <a className="article-link" href="https://www.nature.com/articles/d41586-020-01009-0">https://www.nature.com/articles/d41586-020-01009-0</a>
          <br/><br/>
          <a className="article-link" href="https://www.nature.com/articles/d41586-020-01009-0">https://www.nature.com/articles/d41586-020-01009-0</a>
          <br/><br/>
          <a className="article-link" href="https://www.nature.com/articles/d41586-020-01009-0">https://www.nature.com/articles/d41586-020-01009-0</a>
          <br/><br/>
          <a className="article-link" href="https://www.nature.com/articles/d41586-020-01009-0">https://www.nature.com/articles/d41586-020-01009-0</a>
          
        </div>
        </Fade>
      </ResourcesPageStyle>
    </AllStyles>
  </React.Fragment>
)