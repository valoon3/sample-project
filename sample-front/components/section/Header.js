

const Header = ({ sampleString }) => {

  sampleString = sampleString != null ? sampleString : '';

  return (
    <div>
      <h2>header test {sampleString}</h2>
    </div>
  )
}

module.exports = Header;