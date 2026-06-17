/**
 * Cursor
 * ------
 * Renders the custom gold dot + ring cursor.
 * Invisible on touch devices (CSS `cursor: auto` on body handles that).
 *
 * Usage: mount once, near the top of App.jsx.
 */

import { useCursor } from '@/hooks/useCursor';

export default function Cursor() {
  const { dotRef, ringRef, isHovering, visible } = useCursor();

  return (
    <>
      {/* ── Inner gold dot ── */}
      <div
        ref={dotRef}
        id="cur-dot"
        style={{
          position:       'fixed',
          top:            0,
          left:           0,
          width:          7,
          height:         7,
          borderRadius:   '50%',
          background:     'var(--gold)',
          pointerEvents:  'none',
          zIndex:         9999,
          transform:      'translate(-50%, -50%)',
          transition:     'transform 0.08s',
          opacity:        visible ? 1 : 0,
        }}
      />

      {/* ── Outer trailing ring ── */}
      <div
        ref={ringRef}
        id="cur-ring"
        style={{
          position:     'fixed',
          top:          0,
          left:         0,
          width:        isHovering ? 52 : 32,
          height:       isHovering ? 52 : 32,
          borderRadius: '50%',
          border:       `1px solid ${isHovering ? 'var(--gold)' : 'rgba(201,168,76,0.55)'}`,
          pointerEvents: 'none',
          zIndex:        9998,
          transform:     'translate(-50%, -50%)',
          transition:    'width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s',
          opacity:       visible ? 1 : 0,
        }}
      />
    </>
  );
}