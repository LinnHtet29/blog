import React from "react";
import { Image } from "react-bootstrap";
import DefaultProfileImage from "../../../assets/images/default_image.png";

export default function BlogTable() {
  return (
    <div className="w-100 h-100 bg-white border border-1 border-end border-secondary border-opacity-25 rounded-2 overflow-y-auto overflow-x-hidden">
      <table className="table table-borderless">
        <thead className="border border-1 border-bottom border-secondary border-opacity-25">
          <tr>
            <th>
              <h5>Blog Status</h5>
            </th>
          </tr>
          <tr>
            <th>User</th>
            <th>Date In</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="d-flex justify-content-start align-items-center gap-2">
              <div>
                <Image
                  className="rounded-2"
                  src={DefaultProfileImage}
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              </div>
              <span>John Doe</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-start align-items-center gap-2">
              <div>
                <Image
                  className="rounded-2"
                  src={DefaultProfileImage}
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              </div>
              <span>John Doe</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-start align-items-center gap-2">
              <div>
                <Image
                  className="rounded-2"
                  src={DefaultProfileImage}
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              </div>
              <span>John Doe</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-start align-items-center gap-2">
              <div>
                <Image
                  className="rounded-2"
                  src={DefaultProfileImage}
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              </div>
              <span>John Doe</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-start align-items-center gap-2">
              <div>
                <Image
                  className="rounded-2"
                  src={DefaultProfileImage}
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              </div>
              <span>John Doe</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td>Approved</td>
          </tr>
          <tr>
            <td className="d-flex justify-content-start align-items-center gap-2">
              <div>
                <Image
                  className="rounded-2"
                  src={DefaultProfileImage}
                  width={30}
                  height={30}
                  alt="User Profile"
                />
              </div>
              <span>John Doe</span>
            </td>
            <td>Dec 18 2023</td>
            <td>IT</td>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
