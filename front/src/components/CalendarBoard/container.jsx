import { connect } from "react-redux";
import { createCalendar } from "../../services/calendar";
import CalendarBoard from "./presentation";
import { addScheduleOpenDialog } from "../../redux/addSchedule/actions";

const mapDispatchToProps = dispatch => ({
  openAddScheduleDialog: () => {
    dispatch(addScheduleOpenDialog());
  }
});

const mapStateToProps = state => ({ calendar: state.calendar});

const mergeProps = stateProps => ({
  month: stateProps.calendar,
  calendar: createCalendar(stateProps.calendar)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(CalendarBoard);