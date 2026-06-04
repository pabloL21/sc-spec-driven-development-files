import { html } from 'hono/html'

export const AppointmentsPage = () => html`<main class="site-main">
  <article>
    <header>
      <p class="eyebrow">Coming in Phase 3</p>
      <h1>Appointments</h1>
      <p>Booking opens next. For now, the clinic front desk is labeling folders.</p>
    </header>

    <form aria-label="Appointment preview">
      <fieldset disabled>
        <label>
          Agent
          <select>
            <option>Ava Triage</option>
          </select>
        </label>
        <label>
          Ailment
          <select>
            <option>Prompt Drift</option>
          </select>
        </label>
        <label>
          Date
          <input type="date" />
        </label>
        <label>
          Notes
          <textarea placeholder="Booking behavior arrives in Phase 3."></textarea>
        </label>
      </fieldset>
    </form>
  </article>
</main>`
