import {
  MdArticle,
  MdPeople,
  MdQueryStats,
  MdReport,
  MdSchool,
  MdSettings,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Button from "../reUse/Button";
import { FaBarsProgress, FaStore } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {
  changeMenuState,
  displayDelay,
  displayStaffComp,
} from "../../../global/reduxState";
import pix from "../../../assets/dummy.jpg";
import Tooltip from "./Tooltip";
// import { useTeacherInfo } from "../../hooks/useTeacher";

const Sider = () => {
  const dispatch = useDispatch();
  const showing = useSelector((state: any) => state.showStaffComp);
  // const { teacherInfo } = useTeacherInfo();

  const handleToggleMenuFalse = () => {
    if (!document.startViewTransition) {
      dispatch(changeMenuState(false));
    } else {
      document.startViewTransition(() => {
        dispatch(changeMenuState(false));
      });
    }
  };

  const handleDisplayStaff = () => {
    if (!document.startViewTransition) {
      dispatch(displayStaffComp(!showing));
      dispatch(displayDelay(showing));
    } else {
      document.startViewTransition(() => {
        dispatch(displayDelay(!showing));

        if (showing === true) {
          const timer = setTimeout(() => {
            clearTimeout(timer);
            dispatch(displayStaffComp(!showing));
          }, 500);
        } else {
          dispatch(displayStaffComp(!showing));
        }
      });
    }
  };

  return (
    <div className="overflow-y-auto w-full border-r bg-white text-blue-900 flex flex-col text-[15px]">
      <div className="w-full flex px-2 mt-6  flex-col items-center justify-center">
        <div className=" w-16 h-16 object-cover flex border rounded-full items-center justify-center ">
          <img
            className="w-full h-full object-cover rounded-full border"
            src={pix}
          />
        </div>
        <div className="mt-[10px]">
          <p className="break-words font-bold mb-3 text-center">
            <Tooltip>
              <p>Prince John</p>
            </Tooltip>
          </p>
          <p className="break-words font-medium flex gap-2 items-center">
            <p>Role : </p>
            <p>Administrator</p>
          </p>
        </div>
      </div>

      {/* top box */}

      <div className="mt-[15px] px-3 text- center flex flex-col border mx-2 rounded-md py-4">
        <div className="mb-4 text-[13px] font-medium ">
          Mark students Attendance with the Button below{" "}
        </div>
        <div className="flex w-full justify-center">
          <NavLink to="upgrade">
            <Link to="/attendance">
              <Button
                name="Attendance"
                className="bg-black text-white border-none font-medium py-4 px-9 leading-tight"
                onClick={() => {
                  // handleDisplayStaff();
                }}
              />
            </Link>
          </NavLink>
        </div>
      </div>

      {/* top box */}

      {/* Settings */}
      <div className="mt-8 px-2 flex flex-col h-[90%]">
        <NavLink
          to="/main-dashboard"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Dashboard
          <MdQueryStats />
        </NavLink>

        <NavLink
          to="/total-schools"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Total Schools
          <MdPeople />
        </NavLink>

        <NavLink
          to="/total-students"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Total Students
          <FaBarsProgress />
        </NavLink>

        <NavLink
          to="/finances"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Finances
          <MdSchool />
        </NavLink>

        <NavLink
          to="/feedbacks"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Feedbacks
          <MdArticle />
        </NavLink>

        <NavLink
          to="/reports"
          className={({ isActive }) =>
            isActive
              ? "duration-500 transition-all p-2 rounded-sm bg-blue-100 text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
              : "duration-500 transition-all p-2 rounded-sm hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[3px] flex items-center justify-between "
          }
          onClick={handleToggleMenuFalse}
        >
          Reports
          <FaStore />
        </NavLink>

        <div className="flex-1" />

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive
              ? "mt-10 duration-500 transition-all p-2 rounded-sm bg-blue-500 text-black cursor-pointer font-medium my-[4px] flex items-center justify-between "
              : "mt-10 duration-500 transition-all p-2 rounded-sm  flex items-center justify-between hover:bg-blue-100 hover:text-black cursor-pointer font-medium my-[4px]"
          }
          onClick={handleToggleMenuFalse}
        >
          Settings
          <MdSettings />
        </NavLink>
      </div>
    </div>
  );
};

export default Sider;
