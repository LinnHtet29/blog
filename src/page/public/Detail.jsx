import React from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Button,
  InputGroup,
} from "react-bootstrap";
import BlogArticle from "../../components/public/blog/BlogArticle";
import eyeSvg from "../../assets/images/eye.svg";
import SignUpForm from "../../components/public/form/SignUpForm";

export default function Detail() {
  const blog = {
    content: `<h2>10 Tips for a Healthy Lifestyle</h2><p>Living a healthy lifestyle is essential for overall well-being. Here are some tips to help you maintain a healthy and happy life:</p><ul><li>Stay Hydrated:</li><p>Drink at least 8 glasses of water every day to keep your body hydrated and support vital functions.</p><li>Eat a Balanced Diet:</li><p>Include a variety of fruits, vegetables, whole grains, and lean proteins in your daily meals.</p><li>Exercise Regularly:</li><p>Engage in at least 30 minutes of moderate-intensity exercise most days of the week to keep your body active.</p><li>Get Enough Sleep:</li><p>Ensure you get 7-9 hours of quality sleep each night to promote physical and mental well-being.</p></ul><ol><li>Manage Stress:</li><p>Practice stress-reducing activities such as meditation, deep breathing, or yoga to maintain mental health.</p><li>Connect with Others:</li><p>Build and maintain strong social connections with friends and family for emotional support.</p><li>Avoid Smoking and Excessive Alcohol:</li><p>Limit or eliminate tobacco and alcohol consumption for better long-term health.</p><li>Protect Your Skin:</li><p>Use sunscreen and protective clothing to shield your skin from harmful UV rays and prevent skin damage.</p></ol><p>Remember, adopting these habits gradually can lead to positive changes in your lifestyle. Take small steps and be consistent for long-term success!</p>`,
  };

  const blogs = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/54da/9072/42dabdd296b59f06235cff2ebd5a665f?Expires=1702857600&Signature=i~SZ8khVAQ2TffTQD2VrWD2NJEOKJ1vE3lbwsJg-2AZGEUSIlxTGuRo~SyyybTFfx25PImCEoDzac3wuB02kKGIRoaGy7gRNB7rx7qow5NDYLfwKZ5-8x1Lc8s2P0kHZ4fCIdmnhoRX9NjxvV07mbsXK2pcrGePKksfeKZuWiGLR9wxlhl22esehQkwT63wPTfSutzP4AJty9nxhfk24RoEBklA4WaWPxrjdxDNpVhhJrCHZ2NodehY~Tn8diRRO8vOHfl2Nm48IKyT7Jubh~y9LidJlke8rLw5X8dd6HsSAAqKgrpFN9qHXpD~7E65V3e73hTLnbAOuXvq2rw5o5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      linkTitle:
        "Connecting artificial intelligence with digital product design",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/ae69/ce9c/94f3a12a95859303cc9b14a152ae97d3?Expires=1702857600&Signature=hLFVDimVDxfUqYAX8AXb6PiXn2qyaUyknWk6pXai3t6jhMVPLnsWK4aoigFYYabX8OvxKzSUkfKGKtI8GjgNawW-qIJ43a89qOQYPc6d2G8knxumQb86iVSrAojT9VRzFuaEmc5wGedTOe7P4dJhybeywtdx9UZ0~RySlCrx019h0rh0GabC~e2W-idBg3eX1FudDkMKqkgZToX77Lx4zvnwfXBiqYahFNmMe9saAwztLjHJ1K2qVYRmLb~LtshGChll9Y6Exaft5bT91xkxi1zC-voKLA2H2~JATWrCCH8B9kAC6fAFXZ30pslPbimCJNi1FpKp~ol9m7S~ZYHdQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      linkTitle: "Hello world, or, in other words, why this blog exists",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a44b/fd96/4c92e48435f4bced37515ceaf19d752e?Expires=1702857600&Signature=n55G3XOtHfnNBXo~VBx-kCHLBb~211HUQdrClgrFCGClBEnwzVzggCuF~LQX3kC0-vYWR77-qPRtNyB8Dhvmj80nAnHYvTLojJRPgEeDkZjkixpMYmwOqP~vgu08T6mMt9bUJAafGRUMD-9p~N5vzm3sWs2jchyyFifJBQX4Fpi1oBd9okyuMtXP-iWBhMHk74XQaUAaOfXWgfy2WLRFJ7lcImyzN7afhbHhl9jHwVeMxwn4JIz2G79K-5JDCy3ZJCfRLak-xQKX~Oil2Og57xP2dI40xyHw-WlJd6cUk3IelpsXPYfH4CVHprCRUD5xyXYfq~yxgnfLH0PameEMyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      linkTitle: "Here are some things you should know regarding how we work",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/54d6/fee3/f7b19a34b9740986c07b3c4c157cc2b3?Expires=1702857600&Signature=dAseY8pb2aDG3FrkpH1-gkLij~IrGdqU~-ZDONSC0wW7LJc1w-sI9dpxQBYUKj4plLFHfs9DSUKef~mjv69E-ltMYnicI55rNGCt2VdX~I~c~L8FJqaaytUIZ7kOvzDpXYgzxnRcKeUkRgL4AqOUjc3maUztOgCIZI4ZfvwLECd7XyTEYN0knxWoEATB53oV7Hi0A2UPKsTyoYdGub2NrpGXWr1ir9XNMDDSspBQEWLOiDxCIusCnoJeF4up0KZUc0Qw3OOPs5hwAIsZrBx1VTjfYzOxt9vBx0NXthL30k-IOs02kHa5ERi2KN514TgqN3g1xscnJcaoGFThvEp-cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      linkTitle:
        "A few words about this blog platform, Ghost, and how this site was made",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/a7ba/7556/373bb8f3005fee14fb8946d66839462a?Expires=1702857600&Signature=HnwgN01pTVipHpzHPLzkP993J7DTRqAnd-rW5sbVWPDH7lyzIpaUu07F4Y5vfOqCsO2CflYb2aqjZkL1GlRgiAQ~od0jnRMB2DHEzlIX5uXCfq8KwxTCRSB1Tcnj2pTtCqGdBJhMwFkbfPxiaaN7lF6j4FzI8BqG9ZPfMG~GATu3I-t5NhInF3p5KZ8rRmkHmRtZLFgQoAVDzTglZvfRuzFI2gZZogO-WUEuGqsr3Zqurw390Hc7FO341zXvccTnXshLI618G3JaX32Dm~jEunHd13BV51aEtPiijXIEkLu5ab7Wf-jvIY9jBRhduwr0GrBbrlnOQQCvvnVFdZpsrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      linkTitle:
        "Updating list of 50+ sources on distributed teams, remote work, and how to make it all work better",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/5356/790d/830d59385873020c6e143cf8a787345f?Expires=1702857600&Signature=bhsPbUNlGAhs57SsUN9G8eEMZaNI~4vKIAeSS99VMstokr56Uq0yR0GyjXKfivepzZfKFJo4hjYsuIaMEwwl81enRaT2EAB-xkcZHvNF4ETyGW3kqO7ssK9IZt5YT61p98xxeZGtTdpmKzP2ub3GOzwJgbSTYLN6eNOLzHcOrO3v33cTuWMLLlFEE5PADxcVUd5~ZBwVkZ3ydvhmmv7rVi98Vc86yYMjKoJvDOjfbM505d5F5io~AkyXhGdKCs0DeM6Orq12gOB0m3iXram3olQG1geQJr7pTyvZCgMqtY4C0QVgNtecfApCQuhnB5TVS5RmtPRE3TPNRXRNCsySAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      linkTitle:
        "How modern remote working tools get along with Old School Cowboy's methods",
    },
  ];

  return (
    <>
      <Container className="main">
        <section className="mb-3">
          <h1 className="text-center secondary-font fw-bold mt-5 mt-md-0 p-2 p-md-0">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
          <h5 className="text-center fw-light mx-2 mx-md-5 pb-3 typo-mono fs-6">
            Why Ghost (& Figma) instead of Medium, WordPress or other options?
          </h5>
          <Image
            className="main-image"
            src="https://s3-alpha-sig.figma.com/img/cd03/6c26/e7e1275cacd73edc67b4afe128d222d5?Expires=1702857600&Signature=KWDkJzwJQO79NVsKUS6hLGkx3BrA00NPYwOW4XcTkjBmhoSHttB3CWg2v-TOcs4ISkWWuV4jJiUYlFnUcNzQU8MqrF3XXr3pLqme5LdQzVzZKTi42QZCdYhwRsDu18lEcf7-maDgbZHcK6Wa~Fk9D7o5j41dpbjEeGyodoriMNbRZviep~4WZT-tt5aVJTaKuXFVUa-FEIep9GAbJ7oScssmgC7hMKcAN5stSu4s9meuhP38VG5K3UwSP1f2InnEazCVg3BIWgPs6YjMZMfaclTUz7QHuJOq1Wsx8luneZl-viF6AlDPDse1WpL8y0LTeAY~cZcZgPepuoItLBHM-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            fluid
          />
        </section>
        <section className="border-top border-2 border-black mx-3 mx-md-5 pt-3">
          <Row>
            <img
              className="profileImage"
              src="https://s3-alpha-sig.figma.com/img/7e97/4ac5/875cbd62dfb4fbcb27f4d719d4c90d9d?Expires=1703462400&Signature=okZmVQBzIFaascXpTgt8-CjEJui4lv19XdZO0L7QpFsmrap1X61ZCpMUrgJgyLld60oGGqK8iIL7D4CFi2bF9Zs8rMBNU0xQQkOIgKmcnWPINb1YE8PlZPemzr5WXalsmGvBvzz2TWYeT8H2oLfjW0FKsfPCDAjtAYmGcDJ1uuq0ZTywHqL8wlkemeDZXFPa7wFoTVuAR5ufAdJB80C5N~v6lD3fR1dArXhnZPG2yykdn1vj8zhDw6AU0LCZjuxEvJQAbZ8COGQ02Z98AnypxUvkD4O7WKwcNktiyu9W8TuQiZinbA5sBUsGW4ukupuTCUc-1p8BoG8GLj9WwSXReA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="profile"
            />
            <Col>
              <Row>
                <h3 className="secondary-font fw-bold text-uppercase">
                  Mika MAtikainen
                </h3>
                <h6>Apr 15, 2020 · 4 min read</h6>
              </Row>
            </Col>
            <Col className="d-none d-md-block">
              <div>
                <InputGroup className="mb-3 justify-content-md-end">
                  <Button
                    variant="white shadow-sm col-6 col-md-auto"
                    id="facebook-btn"
                  >
                    <img
                      width={40}
                      height={40}
                      src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                      alt="facebook icon"
                    />
                  </Button>
                  <Button
                    variant="white shadow-sm col-6 col-md-auto"
                    id="twitter-btn"
                  >
                    <img
                      width={40}
                      height={40}
                      src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                      alt="twitter icon"
                    />
                  </Button>
                </InputGroup>
              </div>
            </Col>
            <InputGroup className="mb-3 d-md-none">
              <Button
                className="col-4"
                variant="white shadow-sm"
                id="facebook-btn"
              >
                <div>
                  <img
                    width={25}
                    height={25}
                    src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                    alt="facebook icon"
                  />
                </div>
              </Button>
              <Button
                className="col-4"
                variant="white shadow-sm"
                id="twitter-btn"
              >
                <div>
                  <img
                    width={25}
                    height={25}
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                    alt="twitter icon"
                  />
                </div>
              </Button>
              <Button
                className="col-4"
                variant="white shadow-sm"
                id="twitter-btn"
              >
                <div>
                  <img
                    width={25}
                    height={25}
                    src="https://w7.pngwing.com/pngs/31/144/png-transparent-wechat-computer-icons-logo-others-miscellaneous-face-monochrome.png"
                    alt="twitter icon"
                  />
                </div>
              </Button>
            </InputGroup>
          </Row>
          <p className="my-3 my-md-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Aliquam quis
            posuere ligula. In eu dui molestie, molestie lectus eu, semper
            lectus.
          </p>
          <h3 className="my-3">Next on the pipeline</h3>
          <p className="my-3 my-md-5">
            Duis eu velit tempus erat egestas efficitur. In hac habitasse platea
            dictumst. Fusce a nunc eget ligula suscipit finibus. Aenean pharetra
            quis lacus at viverra. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Morbi efficitur
            auctor metus, id mollis lorem pellentesque id. Nullam posuere
            maximus dui et fringilla.
          </p>
          <Image
            className="main-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV8ppBbBwlLcRH77XoSQueqttyvZVMXt8Wa6WpuwyyidgDlz1_0m-RZ5XHviZwE9NwJL0&usqp=CAU"
            fluid
          />
          <p className="text-center fs-6 px-1 px-md-5">
            Image caption centered this way and I'll make this a bit longer to
            indicate the amount of line-height.
          </p>
          <div
            className="my-5"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          <InputGroup className="mb-3 px-5 d-none d-md-block">
            <Button
              className="col-6"
              variant="white shadow-sm"
              id="facebook-btn"
            >
              <div>
                <img
                  width={30}
                  height={30}
                  src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                  alt="facebook icon"
                />
                <span>Share on facebook</span>
              </div>
            </Button>
            <Button
              className="col-6"
              variant="white shadow-sm"
              id="twitter-btn"
            >
              <div>
                <img
                  width={30}
                  height={30}
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                  alt="twitter icon"
                />
                <span>Share on twitter</span>
              </div>
            </Button>
          </InputGroup>
          <p className="d-md-none">Share : </p>
          <InputGroup className="mb-3 d-md-none">
            <Button
              className="col-4"
              variant="white shadow-sm"
              id="facebook-btn"
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src="https://www.svgrepo.com/show/333535/facebook-circle.svg"
                  alt="facebook icon"
                />
              </div>
            </Button>
            <Button
              className="col-4"
              variant="white shadow-sm"
              id="twitter-btn"
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/twitter-icon.png"
                  alt="twitter icon"
                />
              </div>
            </Button>
            <Button
              className="col-4"
              variant="white shadow-sm"
              id="twitter-btn"
            >
              <div>
                <img
                  width={25}
                  height={25}
                  src="https://w7.pngwing.com/pngs/31/144/png-transparent-wechat-computer-icons-logo-others-miscellaneous-face-monochrome.png"
                  alt="twitter icon"
                />
              </div>
            </Button>
          </InputGroup>
          <p className="p-2 border-bottom-dot">Tags: product design, culture</p>
          <Row>
            <img
              className="profileImage"
              src="https://s3-alpha-sig.figma.com/img/7e97/4ac5/875cbd62dfb4fbcb27f4d719d4c90d9d?Expires=1703462400&Signature=okZmVQBzIFaascXpTgt8-CjEJui4lv19XdZO0L7QpFsmrap1X61ZCpMUrgJgyLld60oGGqK8iIL7D4CFi2bF9Zs8rMBNU0xQQkOIgKmcnWPINb1YE8PlZPemzr5WXalsmGvBvzz2TWYeT8H2oLfjW0FKsfPCDAjtAYmGcDJ1uuq0ZTywHqL8wlkemeDZXFPa7wFoTVuAR5ufAdJB80C5N~v6lD3fR1dArXhnZPG2yykdn1vj8zhDw6AU0LCZjuxEvJQAbZ8COGQ02Z98AnypxUvkD4O7WKwcNktiyu9W8TuQiZinbA5sBUsGW4ukupuTCUc-1p8BoG8GLj9WwSXReA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="profile"
            />
            <Col>
              <p>
                <b>Mika Matikainen</b> is a Design Founder & Advisor, Berlin
                School of Creative Leadership Executive MBA participant, Zippie
                advisor, Wolt co-founder, and Nordic Rose stakeholder.
              </p>
            </Col>
          </Row>
        </section>
      </Container>
      <Container
        fluid
        className="border-top border-2 border-dark position-relative mt-5"
      >
        <Image
          src={eyeSvg}
          alt="eye"
          className="position-absolute translate-middle start-50"
        />
        <section className="container">
          <h2 className="text-center my-5 pt-3 secondary-font">
            What to read next
          </h2>
          <Row className="my-5">
            {blogs.map((blog, index) => (
              <Col xs={12} md={4}>
                <BlogArticle
                  key={index}
                  image={blog.image}
                  title={blog.linkTitle}
                />
              </Col>
            ))}
          </Row>
        </section>
        <SignUpForm />
      </Container>
    </>
  );
}
