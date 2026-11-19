import Link from "next/link";

import "@/styles/_components/Header.css";

// TODO: Only show is the user is logged.
export default function Header() {
	return (
    <header className="header">
      <nav className="header__navbar">
        <ul className="header__navbar__list">
          <li className="header__navbar__list__item">
            <Link href="/" className="logoLink">
              Absencia
            </Link>
          </li>

          <li className="header__navbar__list__item">
            <Link href="/absence-requests" /* routerLinkActive="header__navbar__list__item__linkActive" */ className="header__navbar__list__item__link">
              <i className="pi pi-home"></i>

              Demandes d'absence
            </Link>
          </li>

          <li className="header__navbar__list__item">
            <Link href="/employer-wtr-public-holidays" /* routerLinkActive="header__navbar__list__item__linkActive" */ className="header__navbar__list__item__link">
              <i className="pi pi-calendar-minus"></i>

              RTT employeur et jours fériés
            </Link>
          </li>

          <li className="header__navbar__list__item" /* permissions="'CAN_READ_PLANNING_REPORT'" */>
            <Link href="/reports/planning" /* routerLinkActive="header__navbar__list__item__linkActive" */ className="header__navbar__list__item__link">
              <i className="pi pi-calendar"></i>

              Planning
            </Link>
          </li>

          <li className="header__navbar__list__item" /* permissions="'CAN_READ_TABLE_REPORT'" */>
            <Link href="/reports/table" /* routerLinkActive="header__navbar__list__item__linkActive" */ className="header__navbar__list__item__link">
              <i className="pi pi-table"></i>

              Tableau
            </Link>
          </li>

          <li className="header__navbar__list__item" /* permissions="'CAN_READ_HISTOGRAM_REPORT'" */>
            <Link href="/reports/histogram" /* routerLinkActive="header__navbar__list__item__linkActive" */ className="header__navbar__list__item__link">
              <i className="pi pi-chart-bar"></i>

              Histogramme
            </Link>
          </li>
        </ul>
      </nav>

      {/* <app-form [formGroup]="logoutFormGroup" [method]="logoutFormMethod" [action]="logoutFormAction" (postSubmit)="postLogout($event)">
        <button className="header__logOutLink">
          <i className="pi pi-sign-out header__logOutLink__icon"></i>

          Se déconnecter
        </button>
      </app-form> */}
    </header>
  );
}