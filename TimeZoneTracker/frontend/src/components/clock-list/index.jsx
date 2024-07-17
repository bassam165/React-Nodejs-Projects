import ClockListItem from "./clock-list-item"
import classes from './index.module.css'

const index = ({ clocks, updateClock, deleteClock, localClock }) => {
  return (
    <div className={classes.card}>
      <h2>Other Clocks</h2>
      <hr />
      {clocks.length == 0 ? (
        <p>There is no clocks. please create.</p>
      ) : (
        <div className={classes.clock}>
        {clocks.map((clock) => (
          <ClockListItem 
          clock={clock} 
          localClock={localClock}
          key={clock.id} 
          updateClock={updateClock}
          deleteClock={deleteClock}
          />
        ))}
        </div>
      )}
    </div>
  )
}

export default index
