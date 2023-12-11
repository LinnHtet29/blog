import { Container, Row, Col, Image } from "react-bootstrap";

export default function Blog() {
  return (
    <Container className="main">
      <section>
        <Image
          className="main-image"
          src="https://s3-alpha-sig.figma.com/img/cd03/6c26/e7e1275cacd73edc67b4afe128d222d5?Expires=1702857600&Signature=KWDkJzwJQO79NVsKUS6hLGkx3BrA00NPYwOW4XcTkjBmhoSHttB3CWg2v-TOcs4ISkWWuV4jJiUYlFnUcNzQU8MqrF3XXr3pLqme5LdQzVzZKTi42QZCdYhwRsDu18lEcf7-maDgbZHcK6Wa~Fk9D7o5j41dpbjEeGyodoriMNbRZviep~4WZT-tt5aVJTaKuXFVUa-FEIep9GAbJ7oScssmgC7hMKcAN5stSu4s9meuhP38VG5K3UwSP1f2InnEazCVg3BIWgPs6YjMZMfaclTUz7QHuJOq1Wsx8luneZl-viF6AlDPDse1WpL8y0LTeAY~cZcZgPepuoItLBHM-w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          fluid
        />
        <h1 className="text-center secondary-font fw-bold">
          A few words about this blog platform, Ghost, and how this site was
          made
        </h1>
        <h5 className="text-center fw-light mx-5 pb-3 border-bottom border-2 border-black typo-mono fs-6">
          Why Ghost (& Figma) instead of Medium, WordPress or other options?
        </h5>
      </section>
      <section className="px-md-5">
        <h2 className="text-center secondary-font fw-bold my-5">
          All Articles
        </h2>
        <Row>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/401f/6c4e/b41fc4f07883f092abcb8b50cc385300?Expires=1702857600&Signature=jtt820hsaYxepCCSeresu7icheFwUCj3osVhhp8u6p5B-lGHNRYGajYJ0r9sLJDOF77rysyDfeyAy0UCuzom2aF9qOEJ7MQ0FDn4biPXbM36BodXM2-WlOkII1I~j8tLN7hIzRMdo67XL~PHXghhAwFq-vz~AOIeBfGe9Z1LtAuzrG9wob01yGassR6Qx3xT-XfjXYzw2qrvzABllGis7ywLcioRBxrk34WAu6RJaQlBexwvb6ol8VV9XapnozzmTbPhnziqQjvFuyctcbSvPzDPXwqQAKciEm4OO2xJTuPF3K1A-Sn0TDOBbnqjhofA-HTG-RDEH8Pr01oDri8YZw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Here are some things you should know regarding how we work
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/54da/9072/42dabdd296b59f06235cff2ebd5a665f?Expires=1702857600&Signature=i~SZ8khVAQ2TffTQD2VrWD2NJEOKJ1vE3lbwsJg-2AZGEUSIlxTGuRo~SyyybTFfx25PImCEoDzac3wuB02kKGIRoaGy7gRNB7rx7qow5NDYLfwKZ5-8x1Lc8s2P0kHZ4fCIdmnhoRX9NjxvV07mbsXK2pcrGePKksfeKZuWiGLR9wxlhl22esehQkwT63wPTfSutzP4AJty9nxhfk24RoEBklA4WaWPxrjdxDNpVhhJrCHZ2NodehY~Tn8diRRO8vOHfl2Nm48IKyT7Jubh~y9LidJlke8rLw5X8dd6HsSAAqKgrpFN9qHXpD~7E65V3e73hTLnbAOuXvq2rw5o5g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Granny gives everyone the finger, and other tips from OFFF
              Barcelona
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/ae69/ce9c/94f3a12a95859303cc9b14a152ae97d3?Expires=1702857600&Signature=hLFVDimVDxfUqYAX8AXb6PiXn2qyaUyknWk6pXai3t6jhMVPLnsWK4aoigFYYabX8OvxKzSUkfKGKtI8GjgNawW-qIJ43a89qOQYPc6d2G8knxumQb86iVSrAojT9VRzFuaEmc5wGedTOe7P4dJhybeywtdx9UZ0~RySlCrx019h0rh0GabC~e2W-idBg3eX1FudDkMKqkgZToX77Lx4zvnwfXBiqYahFNmMe9saAwztLjHJ1K2qVYRmLb~LtshGChll9Y6Exaft5bT91xkxi1zC-voKLA2H2~JATWrCCH8B9kAC6fAFXZ30pslPbimCJNi1FpKp~ol9m7S~ZYHdQA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Hello world, or, in other words, why this blog exists
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/9d29/c781/1c41c38a016505004b25ed9873519a33?Expires=1702857600&Signature=csFdcjPoewaS7EZazcT4WAOmT1k7AsVAYvtrhdoVBUHqh04O2S9UH0uXiUp8oV5mutrSYHsBakZ3gRnFAsTDWdMv5sUpkxO9ZJQnyldZiju1y29H5cvRz9BthuJig-WTLv2fAvhyb03wsRErRqhyLEobZtb7WDGfMdNBBdSoShgyukKtryKxVSkE3A4N1Ih0p9p3sSpUNURzpU~3-FTgtU-JUUzyHKXE3S3Xm5JFZ2IGrNKolt8jSiBtHkUpCAO8cmFwTVwvYe9cnjHY9rIFeqAGSuZjBJV72Sqle2xby7koG8CiDkwPMqMxhaKCBBQcnArcHWUiItppV-EreJHCAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Here are some things you should know regarding how we work
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/54d6/fee3/f7b19a34b9740986c07b3c4c157cc2b3?Expires=1702857600&Signature=dAseY8pb2aDG3FrkpH1-gkLij~IrGdqU~-ZDONSC0wW7LJc1w-sI9dpxQBYUKj4plLFHfs9DSUKef~mjv69E-ltMYnicI55rNGCt2VdX~I~c~L8FJqaaytUIZ7kOvzDpXYgzxnRcKeUkRgL4AqOUjc3maUztOgCIZI4ZfvwLECd7XyTEYN0knxWoEATB53oV7Hi0A2UPKsTyoYdGub2NrpGXWr1ir9XNMDDSspBQEWLOiDxCIusCnoJeF4up0KZUc0Qw3OOPs5hwAIsZrBx1VTjfYzOxt9vBx0NXthL30k-IOs02kHa5ERi2KN514TgqN3g1xscnJcaoGFThvEp-cg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Connecting artificial intelligence with digital product design
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/a7ba/7556/373bb8f3005fee14fb8946d66839462a?Expires=1702857600&Signature=HnwgN01pTVipHpzHPLzkP993J7DTRqAnd-rW5sbVWPDH7lyzIpaUu07F4Y5vfOqCsO2CflYb2aqjZkL1GlRgiAQ~od0jnRMB2DHEzlIX5uXCfq8KwxTCRSB1Tcnj2pTtCqGdBJhMwFkbfPxiaaN7lF6j4FzI8BqG9ZPfMG~GATu3I-t5NhInF3p5KZ8rRmkHmRtZLFgQoAVDzTglZvfRuzFI2gZZogO-WUEuGqsr3Zqurw390Hc7FO341zXvccTnXshLI618G3JaX32Dm~jEunHd13BV51aEtPiijXIEkLu5ab7Wf-jvIY9jBRhduwr0GrBbrlnOQQCvvnVFdZpsrw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              It’s all about finding the perfect balance
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/5356/790d/830d59385873020c6e143cf8a787345f?Expires=1702857600&Signature=bhsPbUNlGAhs57SsUN9G8eEMZaNI~4vKIAeSS99VMstokr56Uq0yR0GyjXKfivepzZfKFJo4hjYsuIaMEwwl81enRaT2EAB-xkcZHvNF4ETyGW3kqO7ssK9IZt5YT61p98xxeZGtTdpmKzP2ub3GOzwJgbSTYLN6eNOLzHcOrO3v33cTuWMLLlFEE5PADxcVUd5~ZBwVkZ3ydvhmmv7rVi98Vc86yYMjKoJvDOjfbM505d5F5io~AkyXhGdKCs0DeM6Orq12gOB0m3iXram3olQG1geQJr7pTyvZCgMqtY4C0QVgNtecfApCQuhnB5TVS5RmtPRE3TPNRXRNCsySAQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              I believe learning is the most important skill
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/6cb9/8769/41d041638cdd8e403a537ce8a5520146?Expires=1702857600&Signature=f5nNd7EhslGqpKv4isFpM7kT2XuxczFoR-iJX6GnE28DKx1dhoIZDgMReYbli0acYFRWl40Yt0YFCcLfsuPt5ddm1APIzN-UCTS-62usVc1REUHB2KfvsGps5Mdcpkx~52iv39dA7uLdBuDtW26Lavu~JNR-i-lGRC6TCPyEfmhyFauw4CBfQdTILcjrkXmlE4SpanVc4O7rsjCdH5oZcf07n6pX5dhKv4A2AneTyrFrShi-tDK-aMMj6x6qscK8zAHfXBT-r7zAeoRRbLqRRjwT~H2wit6Zgztw~4PDDr9DoNblRdJTHkcDk1lRkmwXpxWt-N8RqVnPYo3W~p8UlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Clients are part of the team
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/92f0/1419/be87b9d66aaa68f8c66addedb54e5578?Expires=1702857600&Signature=Q3wasbbIA7PUDDWVuDrLHBYCWG~8t5t6GlGsnpHeKrY5ZzDBdyk6LnbWNAiB0ndHS4X5Rl0X1~PlN3fm13UJE9f6z3as-alKW7-ujd7laq2SQ6c-fw9Cm0c1A~gafLZcqF1OkEcaDhOhOidlGpre88n65W9bwo7rHU-sOku~aS7ER~~H0a~mRHSzkGNf2V7~m6q9q3UCAshfQ7h5jWi-L9IVFRNQgcUplzUTvrdaZtlI4MTf83SHYu9DuMSLMmadlAUuQseqAQq12r6DfkEt2fc6h9Uj7Ien0rz7Wo~P2QkmWQZ5wketVsvgsD5AwV6u-FgWZwAD5JNKY4Yfq67Jyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Clients are part of the team
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/a5f1/21b6/2d2f4d91e55756bccfee6c814e4144f9?Expires=1702857600&Signature=VxWcnV5sb8hXRqm6BIrumW-K-FC~cghYGf32cQISj56KQttCmAqFsgyY6G2S993wo7SkqEozgnnR58sTb6i3mxgTenzY~bvSojHIunP5Q2P7TvFAoo3CKlppTfMEHR2SlR56lN6kYRfXJ7~fruZpguQKDD6CgjOl6hjQShnG44sl0sGoVzcRzmihl4SIjQc2bUsYyPt96gHfPeSerUbRcyXhYi4bXBhJGBw9iRjPo7aYVSqZJpWYNcluIfq2Q6FvOcYXXcIRouFwSoUZ92RZjv4T8oYU1LrmLweKRSslqbvbLErk2KI3eFTNT3QIVoIW4S5jYiXN4o40klv1YkgnRA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Here are some things you should know regarding how we work
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/3598/2d06/d2fe8150ed2331e3f6ed44e2e0f9b9db?Expires=1702857600&Signature=m42FR~kX71pcIHVuGXmDhpqSKFGTM7Mh~B040Plm1XBHlGyVePbF3pQVMhIV7CsjBXLjI75mPzLlQTdJ8~doC4Cn4cctWKnHNVeAzIERA8JZ3LzcB52qbMkOfjyb1lgjRHOt4fwepRNxE8RMdDMyURbPiCxFHE9J2kNli85OJBG7HfXvQxCwh0LPtj2XcaDYLMpwxleUG7m-D6n8qT1d0VMy1yPvLTz1vU85MkFL3eoQs8Byk9PqQS6H~yFeV81c2uE4UYFiUNWM9njanyYEHH3BSjJFVCikVXzqaxQg4F5o-~nuVahKSVOTigFegyr1riyvbnbK6-HjDI99-I8Gog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              Connecting artificial intelligence with digital product design
            </p>
          </Col>
          <Col xs={12} md={6} className="mb-4 p-0">
            <Image
              className="article-image"
              src="https://s3-alpha-sig.figma.com/img/a44b/fd96/4c92e48435f4bced37515ceaf19d752e?Expires=1702857600&Signature=n55G3XOtHfnNBXo~VBx-kCHLBb~211HUQdrClgrFCGClBEnwzVzggCuF~LQX3kC0-vYWR77-qPRtNyB8Dhvmj80nAnHYvTLojJRPgEeDkZjkixpMYmwOqP~vgu08T6mMt9bUJAafGRUMD-9p~N5vzm3sWs2jchyyFifJBQX4Fpi1oBd9okyuMtXP-iWBhMHk74XQaUAaOfXWgfy2WLRFJ7lcImyzN7afhbHhl9jHwVeMxwn4JIz2G79K-5JDCy3ZJCfRLak-xQKX~Oil2Og57xP2dI40xyHw-WlJd6cUk3IelpsXPYfH4CVHprCRUD5xyXYfq~yxgnfLH0PameEMyA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              fluid
            />
            <p className="typo-title fs-6 text-center">
              How modern remote working tools get along with Old School Cowboy's
              methods
            </p>
          </Col>
        </Row>
      </section>
    </Container>
  );
}
