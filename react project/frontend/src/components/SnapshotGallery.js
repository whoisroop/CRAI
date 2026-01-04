import React from 'react';

// SnapshotGallery: lightweight component that displays screenshots from
// the `public/snapshots/` folder. Add images like `ui-1.png`, `ui-2.png` there.

const DEFAULT_IMAGES = ['ui-1.png', 'ui-2.png', 'ui-3.png', 'ui-4.png'];

export default function SnapshotGallery({ images = DEFAULT_IMAGES }) {
  return (
    <div className="snapshot-gallery">
      <h3>UI Snapshots</h3>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        {images.map((name) => (
          <div key={name} style={{ width: 220, border: '1px solid #ddd', padding: 8 }}>
            <img
              src={process.env.PUBLIC_URL + '/snapshots/' + name}
              alt={name}
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.style.opacity = 0.6;
                e.currentTarget.src = process.env.PUBLIC_URL + '/snapshots/placeholder.png';
              }}
            />
            <div style={{ marginTop: 6, textAlign: 'center', fontSize: 12 }}>{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
